import ArrayStateVariable from "./Activities/ArrayStateVariable";
import BooleanStateVariables from "./Activities/BooleanStateVariables";
import ClickEvent from "./Activities/ClickEvent";
import Counter from "./Activities/Counter";
import DateStateVariable from "./Activities/DateStateVariable";
import EventObject from "./Activities/EventObject";
import ObjectStateVariable from "./Activities/ObjectStateVariable";
import ParentStateComponent from "./Activities/ParentStateComponent";
import PassingDataOnEvent from "./Activities/PassingDataOnEvent";
import PassingFunctions from "./Activities/PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./Activities/StringStateVariables";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    
    return (
      <div id="wd-lab4">
        <h3>Lab 4</h3>
       <ClickEvent/>
       <PassingDataOnEvent/>
       <PassingFunctions theFunction={sayHello}/>
       <EventObject/>
       <Counter/>
       <BooleanStateVariables/>
       <StringStateVariables/>
       <DateStateVariable/>
       <ObjectStateVariable/>
       <ArrayStateVariable/>
       <ParentStateComponent/>
       <ReduxExamples/>
      </div>
    );
  }