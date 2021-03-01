const App = () => {

    let input = document.querySelector('.input-value')
    let numbers = document.querySelectorAll('.calc')

    state = {
        currResult: '',
        currFirstNum: [],
        currSecondNum: [],
        currOperator: [],
        currSecondOperator: [],
        equal: [],
        dot: [],
    }



    numbers.forEach(el => {

        el.addEventListener('click', (e) => {
            if (((typeof +e.toElement.innerText) == 'number' && !isNaN(+e.toElement.innerText)) || (e.toElement.innerText == '.')) {
                
                if (state.currOperator.length == 0) {
                    state.currFirstNum.push(e.toElement.innerText)
                    state.currFirstNum.join('')

                    let currNum = (state.currFirstNum.join(''))
                    console.log(currNum);
                    state.currResult = currNum
                    console.log(state.currFirstNum);

                } else {

                    state.currSecondNum.push(e.toElement.innerText)
                    state.currSecondNum.join('')

                    let currNum = (state.currSecondNum.join(''))
                    console.log(currNum);
                    state.currResult = currNum
                    console.log(state.currSecondNum);
                }

            } else if (e.toElement.innerText == '-'
                || e.toElement.innerText == '+'
                || e.toElement.innerText == '*'
                || e.toElement.innerText == '/' || e.toElement.innerText == '=') {

                if (state.currOperator.length == 0) {
                    state.currOperator.push(e.toElement.innerText)
                } else  {
                    state.currSecondOperator.splice(0, 1, e.toElement.innerText)
                    console.log(state.currSecondOperator);

                    let firstNum = Number(state.currFirstNum.join(''))
                    let secondNum = Number(state.currSecondNum.join(''))

                    if (state.currOperator == '+') {
                        state.currResult = firstNum + secondNum
                        state.currSecondNum = []
                        state.currFirstNum = []
                        state.dot = []
                        state.currFirstNum.push(state.currResult)
                        state.currOperator.splice(0, 1, state.currSecondOperator[0])
                        console.log(state.currFirstNum);

                        console.log(state.currResult);
                    } else if (state.currOperator == '-') {
                        state.currResult = firstNum - secondNum
                        state.currSecondNum = []
                        state.currFirstNum = []
                        state.dot = []
                        state.currFirstNum.push(state.currResult)
                        state.currOperator.splice(0, 1, state.currSecondOperator[0])

                    }   else if (state.currOperator == '*') {
                        state.currResult = firstNum * secondNum
                        state.currSecondNum = []
                        state.currFirstNum = []
                        state.dot = []
                        state.currFirstNum.push(state.currResult)
                        state.currOperator.splice(0, 1, state.currSecondOperator[0])

                    } else if (state.currOperator == '/') {
                        state.currResult = firstNum / secondNum
                        state.currSecondNum = []
                        state.currFirstNum = []
                        state.dot = []
                        state.currFirstNum.push(state.currResult)
                        state.currOperator.splice(0, 1, state.currSecondOperator[0])
                    } else if (state.currOperator == '=') {
                        state.currSecondNum = []
                        state.currFirstNum = []
                        state.currFirstNum.push(state.currResult)
                        state.currOperator.splice(0, 1)
                    }

                }

                console.log(state.currOperator);
            } else if (e.toElement.innerText == 'AC') {
                state.currResult = 0
                state.currFirstNum = []
                state.currSecondNum = []
                state.currOperator = []
                state.currSecondOperator = []
                state.dot = []

            } 

            console.log(e.toElement.innerText)
            input.value = state.currResult

        })
        input.addEventListener('click', e => input.value = state.currResult)

    });
}

document.addEventListener('DOMContentLoaded', App)


