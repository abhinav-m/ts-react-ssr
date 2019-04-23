import * as React from "react";

interface AppProps {
  name: string;
}

const App: React.FunctionComponent<AppProps> = ({ name: string }) => {
  return (
  <div>
    {`Hi ${name}. Welcome to React and typescript.`}
  </div>
  )
};


App.defaultProps = {
  name:'Guest user'
}

export default App;