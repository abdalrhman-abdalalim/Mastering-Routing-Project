interface IProps{

}
const ThinkingInReact = ({}:IProps)=>{
  return (
    <div className="ml-80 mt-24">
      <h1 style={{ fontSize: 40 }} className="font-bold">
        Thinking in React
      </h1>
      <h4 style={{ maxWidth: 800, fontSize: 20 }}>
        React can change how you think about the designs you look at and the
        apps you build. When you build a user interface with React, you will
        first break it apart into pieces called components. Then, you will
        describe the different visual states for each of your components.
        Finally, you will connect your components together so that the data
        flows through them. In this tutorial, we’ll guide you through the
        thought process of building a searchable product data table with React.
      </h4>
    </div>
  );
}
export default ThinkingInReact