import { useCallback, useState } from "react";
import "easymde/dist/easymde.min.css";

export default function MDEditor({ initialValue, mdeRecordSetter }) {
  const [mde, setMde] = useState(null);

  const injectEditor = useCallback(
    async (element) => {
      if (element == null) return;

      // create and add editor
      element.innerHTML = "";
      const editor = document.createElement("textarea");
      element.append(editor);

      // dynamic import to to support SSR
      const EasyMDE = (await import("easymde")).default;
      const easyMDE = new EasyMDE({
        element: editor,
        showIcons: [
          "strikethrough",
          "code",
          "table",
          "horizontal-rule",
          "undo",
          "redo",
        ],
        initialValue,
        placeholder: "Start typing...",
      });

      setMde(easyMDE);
      mdeRecordSetter(easyMDE);
    },
    [initialValue, mdeRecordSetter]
  );

  return (
    <div>
      <p>Remember you can preview with the toolbar fourth column</p>
      <div ref={injectEditor} />
    </div>
  );
}
