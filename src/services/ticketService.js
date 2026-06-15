export const getAllTickets = () => {
    return fetch("http://localhost:8088/tickets").then(res => res.json())
}