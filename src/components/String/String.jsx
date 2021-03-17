const StringPage = ({str, backgroundColor, color}) => {
  if (str) return (<h1 style={{backgroundColor, color}}>this is the {str} page</h1>);
  else return (<h1 style={{backgroundColor, color}}>this is the String page</h1>);
}
export default StringPage;