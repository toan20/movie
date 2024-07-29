import Header from '../../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const tabs = ['hanh-dong', 'hoat-hinh', 'kinh-di'];
function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [type, setType] = useState('kinh-di');
    const [tabContent, setTabcontent] = useState([]);
    useEffect(() => {
        axios.get(`https://phim.nguonc.com/api/films/the-loai/${type}`).then((response) => {
            setTabcontent(response.data);
        });
    }, [type]);
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

    return (
        <div className="bg-secondary">
            <Header />
            <div className="container mt-5 bg-dark">
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
                <div className="col-lg-12 mt-5">
                    <h2 className="header-title">
                        <span className="title">Phim đề cử</span>
                    </h2>
                    <div className="row"></div>
                    <div className="col-lg-3">
                        <div className="tab-moive">
                            <ButtonGroup style={{ width: '100%' }} aria-label="Basic example">
                                {tabs.map((tab) => (
                                    <Button
                                        style={type === tab ? { color: '#49e3ff', backgroundColor: '#333' } : {}}
                                        key={tab}
                                        onClick={() => setType(tab)}
                                        variant="secondary"
                                    >
                                        {tab}
                                    </Button>
                                ))}
                            </ButtonGroup>
                            <div className="tab-body">
                                {tabContent.items.map((item, index) => (
                                    <div key={index} className="tab-content">
                                        <img className="tab-img" src={item.thumb_url}></img>

                                        <div className="tab-title">
                                            <p className="tab-title-vn">{item.name}</p>
                                            <p className="tab-title-en">{item.original_name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
