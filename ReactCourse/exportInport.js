// // For React Import Renaming
import { Wrapper } from './Header';
import { Wrapper } from './Footer';
// 🚫 Identifier 'Wrapper' has already been declared.

import { Wrapper as HeaderWrapper } from './Header';
import { Wrapper as FooterWrapper } from './Footer';
// ✅ No problems


// EXPORT STATEMENTS 
const significantNum = 5;
export significantNum; 
// 🚫 DOESN'T WORK
// significantNum is an expression that resolves to 5, which is equivalent to writing export 5. 
// The export statement needs a value AND a name
// ✅ This works
export const exportName = /* expression slot */;

// ✅ This also works
export function someFunction() { /* ... */ }


// DEFAULT EXPORT
// We always want to export an expression
// ✅ Correct:
const hi = 5;
export default hi;

// 🚫 Incorrect
export default const hi = 10;


// IMPORTING DEFAULT EXPORTS
// ✅ Correct:
import magicNumber from './data';

// 🚫 Incorrect:
import { magicNumber }  from './data';