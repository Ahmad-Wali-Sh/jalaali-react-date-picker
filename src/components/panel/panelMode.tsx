import { useState, createContext, useContext } from "react";
import { PanelProps } from "../../core";
import { Days } from "../days";
import { Months } from "../months";
import { Years } from "../years";

type Mode = "day" | "month" | "year";

type Panel = Record<Mode, JSX.Element>;

interface PanelModeProps extends Omit<PanelProps, "renderFooter"> {}

interface PanelModeContext extends PanelModeProps {
  onChangeMode?: (mode: Mode) => void;
}

const PanelModeContext = createContext<PanelModeContext>({
  renderHeader: () => null,
  renderPanel: () => null,
  onChangeMode: () => null,
});

export const PanelMode = (props: PanelModeProps) => {
  const [mode, setMode] = useState<Mode>("day");

  const onChangeMode = (mode: Mode) => {
    setMode(mode);
  };

  const panel: Panel = {
    day: <Days />,
    month: <Months />,
    year: <Years />,
  };

  return (
    <PanelModeContext.Provider value={{ ...props, onChangeMode }}>
      {panel[mode]}
    </PanelModeContext.Provider>
  );
};

export const usePanelContext = () => useContext(PanelModeContext);
