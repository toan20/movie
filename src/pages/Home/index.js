import Header from '../../components/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get('https://phim.nguonc.com/api/films/phim-moi-cap-nhat?')
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log(data);
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="col-lg-12">
                    <h2 className="header-title">
                        <span className="title">Phim mới</span>
                    </h2>
                    <div className="row">
                        {data.items.map((item, index) => (
                            <div key={index} className="col-lg-3 mt-5">
                                <a>
                                    <div className="block-wrapper">
                                        <div className="movie-thumb">
                                            <img className="img" src={item.thumb_url}></img>
                                        </div>
                                        <div className="movie-title">
                                            <span>{item.name}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
