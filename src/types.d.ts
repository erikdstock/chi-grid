// TS will pick up .d.ts files automatically, so this file can hold global types
// that we just don't want to have to import all over.

/** The common way to define a react functional component has been with the React.FC type,
 but this seems to be falling out of favor - see [this issue](https://github.com/facebook/create-react-app/pull/8177) -
 so this is a very basic, possibly flawed approximation of that type. If it doesn't work React.FC
 is still very popular
*/
type FC<P extends object> = (props: P) => React.ReactElement | null;
