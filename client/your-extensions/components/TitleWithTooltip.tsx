import React from "react";
import { Tooltip } from "jimu-ui";
import { HelpFilled } from "jimu-icons/filled/suggested/help";

interface HelpTooltipProps {
  title: string;
  description: string;
}

const styles = {
  container: {
    display: "flex",
    gap: "5px",
    justifyContent: "start",
    alignItems: "start",
    marginBottom: "7px",
  },
  tooltip: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
};
const TitleWithTooltip: React.FC<HelpTooltipProps> = ({
  title,
  description,
}) => {
  return (
    <div style={styles.container}>
      <h4 style={{ margin: "0" }}>{title}</h4>
      <Tooltip
        placement="top"
        role="tooltip"
        enterDelay={100}
        enterNextDelay={0}
        enterTouchDelay={700}
        leaveDelay={0}
        leaveTouchDelay={1500}
        offsetOptions={4}
        title={description}
      >
        <div style={styles.tooltip}>
          <HelpFilled size={15} color="#808080" />
        </div>
      </Tooltip>
    </div>
  );
};

export default TitleWithTooltip;
