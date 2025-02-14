import { Button } from "@/components/ui/button";
import { useReducer } from "react";

export const LoadingBar = ({ nombre }: { nombre: number }) => {
  const [state, dispatch] = useReducer(taskReducer, 0);
  const widthLoading = 100 / nombre;
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="w-3/5 h-8 bg-red-900 rounded-xl">
          <div
            style={{ width: `${state}%` }}
            className="bg-black h-full rounded-xl"
          ></div>
        </div>
      </div>
      <div className="flex gap-4">
        <Button
          onClick={() =>
            dispatch({
              type: "plus",
              payload: widthLoading,
            })
          }
        >
          Plus
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: "moins",
              payload: widthLoading,
            })
          }
        >
          Moins
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: "reset",
            })
          }
        >
          Retour à zéro
        </Button>
      </div>
    </div>
  );
};
type TaskType = number;
type TastAction =
  | { type: "plus"; payload: number }
  | { type: "moins"; payload: number }
  | { type: "reset" };

function taskReducer(state: TaskType, action: TastAction) {
  switch (action.type) {
    case "plus": {
      return state + action.payload;
    }
    case "moins": {
      return state === 0 ? state : state - action.payload;
    }
    case "reset": {
      return 0;
    }
    default:
      return state;
  }
}
