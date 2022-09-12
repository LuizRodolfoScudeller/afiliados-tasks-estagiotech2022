import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination, Table } from "antd";

const URL = "http://localhost:8081";

const { Column } = Table;

const data = [
    {id:1,name:'Antonio', idade:18},
    {id:2,name:'Bernardo', idade:11},
    {id:3,name:'Cibele', idade:22},
    {id:4,name:'Dâmia', idade:49},
    {id:5,name:'Eron', idade:10}
]

const UsersTable: React.FC = () => {
//   let [data, setData] = useState([]);
  let [offset, setOffset] = useState(0);
  let [limit, setLimit] = useState(5);
  let [totalPages, setTotalPages] = useState(1);
  let [loading, setLoading] = useState(false);

//   useEffect(() => {
//     getUsers();
//   }, [offset, limit]);

//   const getUsers = async () => {
//     setLoading(true);
//     try {
//       const resp = await axios.get(
//         `${URL}/pessoas?limit=${limit}&offset=${offset}`
//       );
//       setData(resp.data.data);
//       setTotalPages(resp.data._meta.count[0].quantidade);
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchData = (page) => {
//     setLoading(true);
//     try {
//       axios.get(`${URL}/pessoas?limit=${limit}&offset=${(page*5)-5}`).then(resp => {
//         setData(resp.data.data)
//         setLoading(false)
//       })
//     } catch(err) {
//       console.log(err)
//     }
//   }

  return (
    <>
      <Table loading={loading} dataSource={data} pagination={false} >
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Nome" dataIndex="name" key="id" />
        <Column title="Idade" dataIndex="idade" key="id" />
      </Table>
      <Pagination showSizeChanger={false} pageSize={limit} total={totalPages}/>
      {/* <Pagination showSizeChanger={false} pageSize={limit} total={totalPages} onChange={(page) => {fetchData(page)}} /> */}
    </>
  );
};

export default UsersTable;
