import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { RecordsResponse } from './types';
import { formatDate } from './helpes';
import Pagination from './Pagination/index';
import Filters from '../../components/Filters';

const BASE_URL = 'https://games-pesquisa-robson.herokuapp.com'

const Records = () => {
    const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>(); //Hook
    const [activePage, setactivePage] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
            .then(Response => setRecordsResponse(Response.data));
    }, [activePage]);

    const handlePageChange = (index: number) => {
        setactivePage(index)
    }

    return (
        <div className="page-container">
            <Filters link="/charts" linkText="VER GRÁFICOS"/>
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TÍTULO DO GAMER</th>
                    </tr>
                </thead>
                <tbody>
                    {recordsResponse?.content.map(record => (
                        <tr key={record.id}>
                            <td>{formatDate(record.moment)}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td className="text-secondary">{record.gamePlatform}</td>
                            <td>{record.genreName}</td>
                            <td className="text-primary">{record.gameTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                activePage={activePage}
                goToPage={handlePageChange}
                totalPages={recordsResponse?.totalPages} />
        </div>
    );
}

export default Records;