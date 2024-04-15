import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExampleScreen from "./screens/ExampleScreen";
import TemplateScreen from "./screens/TemplateScreen";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={TemplateScreen} />
        <Route path="/template" Component={TemplateScreen} />
        <Route path="/example" Component={ExampleScreen} />
      </Routes>
    </BrowserRouter>
  );
}