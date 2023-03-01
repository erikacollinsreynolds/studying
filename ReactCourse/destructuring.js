// HOW TO RENAME A PROP
const user = { name: 'Erika Collins'};
const { name: userName } = user; 

// OPTION 1: PASS IN PROPS DON'T DESTRUCTURE
function FriendlyGreeting(props) {  
  return (
    <p>
      Hey {props.name}!
    </p>
  );
}

// OPTION 2: PASS IN PROPS AND DESTRUCTURE
function FriendlyGreeting(props) {  
  const { name } = props;
  return (
    <p>
      Hey {name}!
    </p>
  );
}

// OPTION 3: PARAMETER DESTRUCTURING (simply destructure where parameters are)
function FriendlyGreeting({ name }) {
  return (
    <p>
      Hey {name}!
    </p>
  );
}

// OPTION 4: PARAMETER DESTRUCTURING WITH DEFAULT VALUES
  // if "name" is falsy, we want a fallback value, think of this as a default parameter in recursion
function FriendlyGreeting({ name = 'Erika' }) {
  return (
    <p>
      Hey {name}!
    </p>
  );
}

// REAL WORLD EXAMPLE -- STYLING
function HorizontalRule({ width = 100 }) {
  return (
    <div style={{ width }}>
      {/* Line-drawing stuff here */}
    </div>
  );
}

// We can pass in a specific value as a prop if we don't want the default value
<HorizontalRule width={250} /> // 250px
<HorizontalRule /> // 100px


// // For React Import Renaming
import { Wrapper } from './Header';
import { Wrapper } from './Footer';
// 🚫 Identifier 'Wrapper' has already been declared.

import { Wrapper as HeaderWrapper } from './Header';
import { Wrapper as FooterWrapper } from './Footer';
// ✅ No problems