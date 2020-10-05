import React from 'react';
import {
    Typography,
    AutoComplete,
    Input,
    Space,
    // Upload,
    // message,
    // Button,
} from 'antd';
import 'antd/dist/antd.css';

import Grid from '../../components/Grid';
import Header from '../../components/Header';
import CardItem from '../../components/CardItem';
// import backgroundPoke from '../../assets/pokemon.svg';

const Search: React.FC = () => {
    const { Title, Text } = Typography;

    // function handleUpload(info: any) {
    //     if (info.file.status !== 'uploading') {
    //         console.log(info.file, info.fileList);
    //     }
    //     if (info.file.status === 'done') {
    //         message.success(`${info.file.name} file uploaded successfully`);
    //     } else if (info.file.status === 'error') {
    //         message.error(`${info.file.name} file upload failed.`);
    //     }
    // }

    return (
        <>
            <Header />
            <Grid>
                <Space direction="vertical">
                    <Title>Pokédex</Title>
                    <Space size="large" direction="vertical">
                        <Text>
                            Search for Pokémon by name or using the National
                            Pokédex number
                        </Text>
                        <AutoComplete
                          style={{ width: 280, marginBottom: '3rem' }}
                        >
                            <Input.Search size="large" enterButton />
                        </AutoComplete>
                    </Space>
                </Space>

                <CardItem>
                    {/* <Upload onChange={handleUpload}>
                        <Button>Click to upload</Button>
                    </Upload> */}
                </CardItem>
            </Grid>
        </>
    );
};

export default Search;
