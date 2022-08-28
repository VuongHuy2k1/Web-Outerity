import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

const New = ({ inputs, title }) => {
    const [file, setFile] = useState('');
    const productInputs = [
        {
            id: 1,
            label: 'Title',
            type: 'text',
            placeholder: 'Apple Macbook Pro',
        },
        {
            id: 2,
            label: 'Description',
            type: 'text',
            placeholder: 'Description',
        },
        {
            id: 3,
            label: 'Category',
            type: 'text',
            placeholder: 'Computers',
        },
        {
            id: 4,
            label: 'Price',
            type: 'text',
            placeholder: '100',
        },
        {
            id: 5,
            label: 'Stock',
            type: 'text',
            placeholder: 'in stock',
        },
    ];
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Thêm Sản Phẩm</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: 'none' }}
                                />
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
