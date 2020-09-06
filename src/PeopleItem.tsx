import React from "react";
import { Persona, PersonaSize, IconButton } from "office-ui-fabric-react";
import classnames from "classnames";

type PeopleItemProps = {
  label: string;
  url: string;
  isResponsible: boolean;
  toggleResponsible: () => void;
  toggle: () => void;
};

export const PeopleItem = ({
  label,
  url,
  isResponsible,
  toggleResponsible,
  toggle
}: PeopleItemProps) => (
  <div
    className={classnames("user-item", {
      "user-item-responsible": isResponsible
    })}
  >
    <Persona
      imageUrl={url}
      text={label}
      size={PersonaSize.size24}
      onClick={toggleResponsible}
      imageShouldStartVisible={true}
      imageShouldFadeIn={false}
    />
    <IconButton
      className="user-button-cancel"
      iconProps={{ iconName: "Cancel" }}
      onClick={toggle}
    />
  </div>
);
