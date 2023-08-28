import React, { useCallback, useEffect, useRef, useState } from "react";
import ElevatorButtons from "./components/Buttons";
import Building from "./components/Building";
import { Layout } from "./modules/Layout";
import { FormProvider, useForm } from "react-hook-form";
import InputForm from "./components/InputForm";

const App: React.FC = () => {

  const methods = useForm();

  const [currentFloor, setCurrentFloor] = useState<number>(0);
  const [elevatorRequests, setElevatorRequests] = useState<[number, boolean][]>([]);
  const intervalRef = useRef<NodeJS.Timeout | undefined>();


  const onFloorRequest = useCallback(
    (floor: number) => {
      if (floor !== currentFloor) {
        const newRequests = [...elevatorRequests];
        newRequests.push([floor, true]);
        setElevatorRequests(newRequests);
      }
    },
    [elevatorRequests, currentFloor]
  );

  const moveToFloor = useCallback(
    (floor: number) => {
      setCurrentFloor(floor);
      const newRequests = [...elevatorRequests].filter((row) => row[0] !== floor)
      setTimeout(() => { setElevatorRequests(newRequests) }, 1000);
    },
    [elevatorRequests]
  );

  useEffect(() => {
    clearTimeout(intervalRef.current);
    intervalRef.current = setInterval(() => {
      elevatorRequests.map((request,) => {
        if (request[1] == true) {
          moveToFloor(request[0]);
        }
      })
    }, 500);
  }, [onFloorRequest]);

  const [lifts, floors] = methods.watch(["lifts", "floors"]);
  const busyElevators = Array.from({ length: Number(lifts) }, () => false);
  const currentFloors = Array.from({ length: Number(lifts) || 1 }, () => 0);

  return (
    <Layout className="App">
      <FormProvider {...methods}>
        <InputForm />
      </FormProvider>
      <ElevatorButtons
        floors={Number(methods.getValues("floors") || 8)}
        onFloorRequest={onFloorRequest}
        pressed={elevatorRequests}
      />
      <Building
        floors={Number(floors) || 8}
        elevators={lifts || 1}
        currentFloors={currentFloors || []}
        currentFloor={currentFloor}
        busyElevators={busyElevators || []}
      />
    </Layout>
  );
};

export default App;
