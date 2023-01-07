import { useState } from "react";
import { InputRangePicker } from "./components/rangeInput";

function App() {
  const [open, setopen] = useState(false);
  console.log("open state", open);
  return (
    <div>
      <InputRangePicker error open={true} onOpenChange={setopen} />
    </div>
  );
}

export default App;
