import React, {useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useHistory} from "react-router-dom";
import {Loader} from "../components/Loader";

export const QuestionPage =() => {
    const {loading, request} = useHttp()
    const [response, setResponse] = useState ('')
    const history = useHistory()

    // Зибраем данные объектов с сервера при загрузки страницы
    useEffect(() => {
        const fetchData = async () => {
            const data = await request('/api/v1/model/demo/create', 'GET', )
            setResponse(data);
        };
        fetchData();
    }, []);

    const mainPageHandler = async () => {
        try {
            history.push('/')
        } catch (e) {}
    }

    const modelsPageHandler = async () => {
        try {
            history.push('/models')
        } catch (e) {}
    }


    function go_result() {
        history.push(`/model/result/${response.model}`)
    }

    // Зибраем данные объектов с сервера при загрузки страницы
    useEffect(() => {

        if (response.flag_find_winner == 1) {
            go_result();
        }
    }, [response, go_result]);

    const questionHandler_1 = async () => {
        try {

            // Добавляем в объект ответ по новому ключу answer
            var r = response
            r['answer'] = 1
            setResponse(r)

            const body = response
            var data = await request('http://127.0.0.1:8000/api/v1/question', 'POST', body)
            setResponse(data)
        }
        catch (e) {}
    }

    const questionHandler_0 = async () => {
        try {

            // Добавляем в объект ответ по новому ключу answer
            var r = response
            r['answer'] = 0
            setResponse(r)

            const body = response
            var data = await request('http://127.0.0.1:8000/api/v1/question', 'POST', body)
            setResponse(data)
        }
        catch (e) {}
    }

    const questionHandler_2 = async () => {
        try {

            // Добавляем в объект ответ по новому ключу answer
            var r = response
            r['answer'] = 2
            setResponse(r)
            const body = response
            const data = await request('http://127.0.0.1:8000/api/v1/question', 'POST', body)
            setResponse(data)
        } catch (e) {
        }
    }
    if (loading) {
        return <Loader />
    }
    else return (
        <>
        <div>
            <h3>Ответьте на вопрос:</h3>
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{response.question}</span>
                        </div>
                        <div className="card-action">
                            <button
                                className='btn auth-btn-custom'
                                onClick={questionHandler_1}
                                disabled={loading}
                            >Важнее 1ое преимущество</button>
                            <button
                                className='btn auth-btn-custom'
                                onClick={questionHandler_0}
                                disabled={loading}
                            >Одинаково важны</button>
                            <button
                                className='btn auth-btn-custom'
                                onClick={questionHandler_2}
                                disabled={loading}
                            >Важнее 2ое преимущество</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className="col 1">
                <button className="waves-effect waves-light btn" onClick={mainPageHandler}>
                    <i className="material-icons left">backspace</i>
                    На главную</button>
            </div>
            <div className="col 1">
                <button className="waves-effect waves-light btn btn-custom" onClick={modelsPageHandler}>
                    <i className="material-icons right">list</i>К моделям</button>
            </div>
        </div>
        </>

    )
}

