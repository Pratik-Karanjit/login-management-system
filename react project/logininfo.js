export let setLoginInfo = (data) => {
    localStorage.setItem('info', JSON.stringify(data))
}

//for <App/> 
// export let getLoginInfo = () => {
//     let data = localStorage.getItem('info')
//     let parseData = JSON.parse(data)

//     return (parseData)
// }


//for <WowProject>
export const getLoginInfo = () => {
    const loginInfo = localStorage.getItem('loginInfo');
    return loginInfo ? JSON.parse(loginInfo) : null;
  };

export const removeLoginInfo = () => {
    localStorage.removeItem('loginInfo');
  };

