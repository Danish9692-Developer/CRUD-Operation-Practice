import React, { useState } from 'react'

const Form = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [editId, setEditId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !surname || !age || !phone) return;
        if (editId) {
            setUsers(
                users.map((user) =>
                    user.id === editId
                        ? { ...user, name, surname, age, phone }
                        : user
                )
            );
            setEditId(null);
        } else {
            setUsers([...users, { id: Date.now(), name, surname, age, phone },
            ]);
        }
        setName("");
        setSurname("");
        setAge("");
        setPhone("");
    };

    const handleEdit = (user) => {
        setName(user.name);
        setSurname(user.surname);
        setAge(user.age);
        setPhone(user.phone);
        setEditId(user.id);
    };

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }
    return (
        <>
            <h2>User Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder='Surname'
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />

                <input
                    type="text"
                    placeholder='Age'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <input
                    type="text"
                    value={phone}
                    placeholder='Phone'
                    onChange={(e) => setPhone(e.target.value)}
                />

                <button type='submit'>
                    {editId ? "update" : "Add"}
                </button>
            </form>
            <hr />

            <h2>User Table</h2>
            <table border={""} cellPadding={"10"}>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan={"6"}>No data found</td>
                        </tr>
                    ) : (
                        users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.age}</td>
                                <td>{user.name}</td>
                                <td>
                                    <button onClick={() => handleEdit(user)}>
                                        Edit
                                    </button>

                                    <button onClick={() => handleDelete(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>


        </>
    );
};

export default Form;
