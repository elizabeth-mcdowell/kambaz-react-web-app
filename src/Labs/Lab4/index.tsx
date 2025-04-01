
import ArrayStateVariable from "./ArrayStateVariable.tsx";
import BooleanStateVariables from "./BooleanStateVariables.tsx";
import ClickEvent from "./ClickEvent.tsx";
import Counter from "./Counter.tsx";
import DateStateVariable from "./DateStateVariable.tsx";
import EventObject from "./EventObject.tsx";
import ObjectStateVariable from "./ObjectStateVariable.tsx";
import ParentStateComponent from "./ParentsStateComponent.tsx";
import PassingDataOnEvent from "./PassingDataOnEvent.tsx";
import PassingFunctions from "./PassingFunctions.tsx";
import ReduxExamples from "./ReduxExamples/index.tsx";
import StringStateVariables from "./StringStateVariables.tsx";

export default function Lab4() {
  console.log("Calling Lab 4")
  function sayHello() {
    alert("Hello");
  }

  return(
    <div id="wd-lab4">
      <h3>Lab 4</h3>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello}/>
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExamples />

    </div>
  );
}
