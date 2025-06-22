import { useState } from "react";

export default function SceneEditor() {
  const [scenes, setScenes] = useState([{ id: 1, text: "" }]);

  const addScene = () => {
    const newScene = { id: Date.now(), text: "" };
    setScenes([...scenes, newScene]);
  };

  const deleteScene = (id) => {
    setScenes(scenes.filter((scene) => scene.id !== id));
  };

  const updateScene = (id, text) => {
    setScenes(
      scenes.map((scene) => (scene.id === id ? { ...scene, text } : scene))
    );
  };

  return (
    <div className="scene-editor">
      <h2 className="title">🎬 InVideo Clone: Scene Editor</h2>
      {scenes.map((scene, index) => (
        <div key={scene.id} className="scene-card">
          <textarea
            value={scene.text}
            placeholder={`Scene ${index + 1} text...`}
            onChange={(e) => updateScene(scene.id, e.target.value)}
          />
          <button className="delete-btn" onClick={() => deleteScene(scene.id)}>
            ❌
          </button>
        </div>
      ))}
      <button className="add-btn" onClick={addScene}>
        ➕ Add Scene
      </button>
    </div>
  );
}
