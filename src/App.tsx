import * as React from "react";
import "./styles.css";
import classnames from "classnames";
import {
  Checkbox,
  SelectableOptionMenuItemType,
  ComboBox,
  classNamesFunction,
  Dropdown
} from "office-ui-fabric-react";
import { getHierarchy } from "./hierarchy";

export default function App() {
  // const initial_options = [
  //   {
  //     key: "Header1",
  //     text: "Context",
  //     itemType: SelectableOptionMenuItemType.Header
  //   },
  //   { key: "A", text: "Backlog" },
  //   {
  //     key: "divider",
  //     text: "-",
  //     itemType: SelectableOptionMenuItemType.Divider
  //   },
  //   {
  //     key: "Header2",
  //     text: "Iterations",
  //     itemType: SelectableOptionMenuItemType.Header
  //   },
  //   { key: "E", text: "Sprint 1" },
  //   { key: "B", text: "Sprint 2" },
  //   { key: "C", text: "Sprint 3" },
  //   { key: "D", text: "Sprint 4" },
  //   {
  //     key: "divider2",
  //     text: "-",
  //     itemType: SelectableOptionMenuItemType.Divider
  //   },
  //   {
  //     key: "Header3",
  //     text: "Workpackages",
  //     itemType: SelectableOptionMenuItemType.Header
  //   },
  //   { key: "F", text: "WP 1" },
  //   { key: "G", text: "WP 2" },
  //   { key: "H", text: "WP 3" },
  //   { key: "I", text: "WP 4" }
  // ];

  // const data = [
  //   {
  //     key: "P2000",
  //     text: "Neubau Forschungsgebäude",
  //     level: 0,
  //     hierarchy: ["node"]
  //   },
  //   {
  //     key: "1",
  //     text: "Leistungsphase 1",
  //     level: 1,
  //     hierarchy: ["full", "node"]
  //   },
  //   {
  //     key: "1.1",
  //     text: "Arbeitspaket 1.1",
  //     level: 2,
  //     hierarchy: ["next", "full", "node-end"]
  //   },
  //   {
  //     key: "1.2",
  //     text: "Arbeitspaket 1.2",
  //     level: 2,
  //     hierarchy: ["next", "corner", "node-end"]
  //   },
  //   {
  //     key: "2",
  //     text: "Leistungsphase 2",
  //     level: 1,
  //     hierarchy: ["full", "node-end"]
  //   },
  //   {
  //     key: "3",
  //     text: "Leistungsphase 3",
  //     level: 1,
  //     hierarchy: ["full", "node"]
  //   },
  //   {
  //     key: "3.1",
  //     text: "Arbeitspaket 3.1",
  //     level: 1,
  //     hierarchy: ["next", "corner", "node-end"]
  //   },
  //   {
  //     key: "4",
  //     text: "Arbeitspaket 4",
  //     level: 1,
  //     hierarchy: ["full", "h", "node-end"]
  //   },
  //   {
  //     key: "5",
  //     text: "Leistungsphase 5",
  //     level: 1,
  //     hierarchy: ["corner", "node"]
  //   },
  //   {
  //     key: "5.1",
  //     text: "Arbeitspaket 5.1",
  //     level: 1,
  //     hierarchy: ["", "full", "node-end"]
  //   },
  //   {
  //     key: "5.2",
  //     text: "Arbeitspaket 5.2",
  //     level: 1,
  //     hierarchy: ["", "corner", "node-end"]
  //   }
  // ];

  // const relations = [
  //   {
  //     key: "P2000",
  //     parent: null
  //   },
  //   {
  //     key: "1",
  //     parent: "P2000"
  //   },
  //   {
  //     key: "2",
  //     parent: "P2000"
  //   }
  // ];

  const data = getHierarchy("P2000", [], []);
  debugger;

  const onRenderOption = item => {
    debugger;
    return (
      <div className="line">
        {item.hierarchy.map(h => (
          <div
            className={classnames("block", {
              "block-full": h === "full",
              "block-h": h === "h",
              "block-v": h === "next",
              "block-node": h === "node" || h === "node-end",
              "block-corner": h === "corner"
            })}
          >
            {h === "node" && <div className="block-node-full" />}
          </div>
        ))}
        <div>{item.text}</div>
      </div>
    );
    // });
  };

  return (
    <div>
      <Dropdown
        options={data}
        onRenderOption={onRenderOption}
        styles={
          {
            // root: {
            //   backgroundColor: "red"
            // },
          }
        }
      />
    </div>
  );

  //   <div>
  //     <div className="line">
  //       <div className="block block-full">|</div>
  //       <div className="block block-h">|</div>
  //       <div className="block block-node" />
  //     </div>
  //     <div className="block block-v">|</div>
  //     <div className="line">
  //       <div className="block block-corner">|</div>
  //       <div className="block block-node">
  //         <div className="inner-block" />
  //       </div>
  //     </div>
  //     <div className="line">
  //       <div className="block block-filler" />
  //       <div className="block block-full">|</div>
  //       <div className="block block-h">|</div>
  //       <div className="block block-node" />
  //     </div>
  //     <div className="line">
  //       <div className="block block-filler" />
  //       <div className="block block-v">|</div>
  //     </div>
  //     <div className="line">
  //       <div className="block block-filler" />
  //       <div className="block block-corner">|</div>
  //       <div className="block block-node" />
  //     </div>
  //   </div>
  // );

  // return (
  //   <div className="App">
  //     <div className="wbs-container">
  //       <div className="wbs-item">
  //         <div className="wbs-item-content">
  //           <div className="wbs-item-content-header">Projekt</div>
  //           <div className="wbs-item-content-input">
  //             <ComboBox options={initial_options} />
  //           </div>
  //         </div>
  //         <div className="wbs-item">
  //           <div className="wbs-item-content">
  //             <div className="wbs-item-content-header">LP 1</div>
  //             <div className="wbs-item-content-input">
  //               <ComboBox options={initial_options} />
  //             </div>
  //           </div>
  //           <div className="wbs-item">
  //             <div className="wbs-item-content">
  //               <div className="wbs-item-content-header">Arbeitspaket 1</div>
  //               <div className="wbs-item-content-input">
  //                 <ComboBox options={initial_options} />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="wbs-item">
  //             <div className="wbs-item-content">
  //               <div className="wbs-item-content-header">Arbeitspaket 2</div>
  //               <div className="wbs-item-content-input">
  //                 <ComboBox options={initial_options} />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="wbs-item">
  //           <div className="wbs-item-content">
  //             <div className="wbs-item-content-header">LP 2</div>
  //             <div className="wbs-item-content-input">
  //               <ComboBox options={initial_options} />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="wbs-item">
  //           <div className="wbs-item-content wbs-item-content-last">
  //             <div className="wbs-item-content-header">LP 3</div>
  //             <div className="wbs-item-content-input">
  //               <ComboBox options={initial_options} />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
