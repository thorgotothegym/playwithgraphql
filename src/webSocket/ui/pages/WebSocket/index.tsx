import React, { useEffect, useState } from "react";
import { Alert } from "../../components/Alert";
import { SelectCustom } from "../../components/Select";
import Notification from "../../../domain/entities/Notification";
import Document from "../../../domain/entities/Document";
import "./WebSocket.module.css";
import { AsGrid } from "./style";

export enum Layout {
  GRID = "grid",
  LIST = "list",
}

export default function Main() {
  const [layout, setLayout] = useState<Layout>(Layout.GRID);
  const [notification, setNotification] = useState<Notification[]>([]);
  const [documents, setDocuments] = useState<Document>({
    Attachments: [""],
    Contributors: {
      ID: "",
      Name: "",
    },
    CreatedAt: String(new Date()),
    ID: Math.random().toString(16).slice(2),
    Title: "",
    UpdatedAt: new Date(new Date().toString().split("GMT")[0] + " UTC")
      .toISOString()
      .split(".")[0],
    Version: "",
  });

  const { length } = notification;

  const options: string[] = ["asc", "desc"];

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:9090/notifications");
    // Connection opened
    socket.addEventListener("open", function (event) {
      socket.send("Hello Server!");
    });

    // Listen for messages
    socket.addEventListener("message", function (event) {
      setNotification((old) => [
        ...old,
        JSON.parse(event.data) as Notification,
      ]);
    });
  }, []);
  return (
    <>
      <div className="panda">
        <Alert counter={length} />
      </div>
      <div>
        <h3>Documents</h3>
        <div>
          <SelectCustom options={options} label="Please select a option" />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ul>
              <li>
                <input
                  type="radio"
                  id="grid"
                  name="amount"
                  onClick={() => {
                    setLayout(Layout.GRID);
                  }}
                  defaultChecked={true}
                />
                <label htmlFor="grid">Grid</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="list"
                  name="amount"
                  onClick={() => {
                    setLayout(Layout.LIST);
                  }}
                />
                <label htmlFor="list">List</label>
              </li>
            </ul>
          </div>
          <AsGrid></AsGrid>
          <button> + add document</button>
          <div>
            <form>
              <label>
                Title:
                <input type="text" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
