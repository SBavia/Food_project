const postData = async (url, data) => {               //настраивает наш запрос
    const res = await fetch(url, {                    //посылает запрос на серверб получает какой-то ответ от сервера
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();                          //трансформирует в json этот ответ
    //стоит помнить, что это fetch асинхронная операция и пока она выполняется код идет дальше, т.е. fetch отправил запрос, а переменной res уже пошло что-то(ничего) присваиваться. В res.json тоже самое(это если без async/await)
};

const getResource = async (url) => {        //получение ресурса с сервера
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    
    return await res.json();
};

export {postData};
export {getResource};