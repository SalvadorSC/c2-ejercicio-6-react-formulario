import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { Page4 } from "./components/Page4";
import { useState } from "react";

export const App = () => {
  let [user, setUser] = useState({});
  let [nPaso, setNPaso] = useState(0);
  const siguientePaso = () => {
    setNPaso(nPaso + 1);
  };
  const anteriorPaso = () => {
    setNPaso(nPaso - 1);
  };

  const returnPaso = (nPaso) => {
    if (nPaso === 0) {
      return <Page1 siguientePaso={siguientePaso} user={user} />;
    } else if (nPaso === 1) {
      return (
        <Page2 siguientePaso={siguientePaso} anteriorPaso={anteriorPaso} />
      );
    } else if (nPaso === 2) {
      return (
        <Page3 anteriorPaso={anteriorPaso} siguientePaso={siguientePaso} />
      );
    } else if (nPaso === 3) {
      return <Page4 />;
    }
  };
  return <div className="container">{returnPaso(nPaso)}</div>;
};

export default App;
