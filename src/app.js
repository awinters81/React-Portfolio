// I know my app.js will be pulling from the components I create, so this may change...

// so none of the imports are being pulled from.... change how I named them?

import React, { useState } from "react";
import header from "./components/header.js";
import nav from "./components/nav.js";
import page from "./components/page.js";
import footer from "./components/footer.js";

function App() 

  const [startPage = useState(pages[0]);

  return (
    <div>
      <header>
        <nav
          pages={pages}
          startPage={startPage}
            ></nav>
      </header>
      <main>
        <page currentPage={currentPage}></page>
      </main>
      <footer />
    </div>
  );
}

export default App;

