// Vendor
import React from "react";

// Internal
import { useDebouncedCallback } from "../..";


export default (({ cb, millisecods }) =>
  <button onClick={useDebouncedCallback(cb, millisecods)} />
) as React.FC<{
  cb: () => any;
  millisecods: number;
}>;