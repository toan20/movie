import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
function MovieDetail() {
    console.log(useParams());
    return (
        <div className="bg-secondary">
            <Header />
            <div className="container mt-5 bg-dark">
                <div className="row">
                    <div
                        style={{
                            backgroundImage: `url(https://phim.nguonc.com/public/images/Film/hoa-thien-cot-co-trang-2015-poster.jpg)`,
                        }}
                        className=" background col-lg-12"
                    >
                        <div className="row">
                            <div className=" col-lg-4 d-flex justify-content-center align-items-center">
                                <img
                                    alt="123"
                                    className="detail-img"
                                    src="https://phim.nguonc.com/public/images/Film/hoa-thien-cot-co-trang-2015-thumb.jpg"
                                ></img>
                            </div>
                            <div
                                style={{ marginTop: '195px' }}
                                className="detail-title col-lg-8 d-flex flex-column justify-space-between "
                            >
                                <span className="title">Phim đề cử</span>
                                <span>jaskhdajkshdasjkhdaksjhd</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="test">Tập phim :</p>

                        <button>1</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row mt-3 ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Trạng thái :</p>
                            </div>
                            <div className="col-lg-8">
                                <p className="test">932084</p>
                            </div>
                        </div>{' '}
                        <div className="row ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Thời lượng :</p>
                            </div>
                            <div className="col-lg-8">
                                <p className="test">932084</p>
                            </div>
                        </div>{' '}
                        <div className="row  ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Chất lượng :</p>
                            </div>
                            <div className="col-lg-8 d-flex">
                                <p className="test">932084</p>
                            </div>
                        </div>
                        <div className="row  ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Quốc gia :</p>
                            </div>
                            <div className="col-lg-8 d-flex">
                                <p className="test">932084</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row mt-3 ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Đạo diễn :</p>
                            </div>
                            <div className="col-lg-8">
                                <p className="test">932084</p>
                            </div>
                        </div>{' '}
                        <div className="row ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Diễn viên :</p>
                            </div>
                            <div className="col-lg-8">
                                <p className="test">932084</p>
                            </div>
                        </div>{' '}
                        <div className="row  ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Trạng thái :</p>
                            </div>
                            <div className="col-lg-8 d-flex">
                                <p className="test">932084</p>
                            </div>
                        </div>
                        <div className="row  ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Năm :</p>
                            </div>
                            <div className="col-lg-8 d-flex">
                                <p className="test">932084</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="test">Nội dung phim :</p>
                        <p className="test">
                            Hoa Thiên Cốt: Là chuyện tình đặc biệt của sư đồ Bạch Tử Họa và Hoa Thiên Cốt, phim được lấy
                            ý tưởng từ tác phẩm ngôn tình nổi tiếng của tác giả Fresh Quả Quả hiện đang được sự chú ý
                            của khán giả hâm mộ cuốn tiểu thuyết này.Nội dung bộ phim xoay quanh cuộc sống của các môn
                            sinh trong một học đường do Chương Tứ Duy sáng lập ra, vì muốn đem kiến thức của mình truyền
                            bá rộng rãi cho mọi người giúp ích cho xã hội.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
