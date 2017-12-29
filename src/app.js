
let count = 0;
const addOne = () => {
  count++;
  resetApp();
}
const minusOne = ()=> {
  count--;
  resetApp()
};
const reset = () => {
  count=0;
  resetApp();
};

const appRoot = document.getElementById('app');
//ReactDOM.render(template, appRoot);

const resetApp = () => {
  const templateThree =(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick ={minusOne} >-1</button>
      <button onClick= {reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateThree, appRoot);
};
resetApp();
