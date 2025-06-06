import React from "react";

export default function GlitchMusicText() {
  return (
    <>
      <style>{`
        .masked-text {
          background-image: url('https://images.unsplash.com/photo-1732535725600-f805d8b33c9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          background-size: 200%;
          background-position: 0 50%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: animate-background 5s infinite alternate linear;
          user-select: none;
        }
        @keyframes animate-background {
          0% {
            background-position: 0 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>

      <div className="font-sans w-full mb-3">
        <h1 className="masked-text text-[2.7rem] uppercase [letter-spacing:0.8rem]">
        I'm Gaurav Dwivedi
        </h1>
      </div>
    </>
  );
}
