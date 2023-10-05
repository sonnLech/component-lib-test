import "../lib/style/index.scss";
import { Button } from "../";
import { Title } from "../lib/components/Typography/Title";
import { IconButton } from "../lib/components/IconButton";

function App() {
  return (
    <div>
      <Title level={1}>Hello world!</Title>
      <Button variant="primary">Test Btn</Button>
      <div className="mt-4 px-4">
        <IconButton />
      </div>
    </div>
  );
}

export default App;
