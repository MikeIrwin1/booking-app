import React from "react";
import BookingBox from "../components/BookingBox";
import BookingTableForm from "../components/BookingTableForm"

import TableBox from "../components/TableBox";

class PageContainer extends React.Component{
    constructor (props){
        super(props)
        this.state={
            bookings: null,
            tables: null,
            isFiltered: false,
            filterDate: null,
            filteredBookings: null,
            editable: false
        }
        this.onEdit = this.onEdit.bind(this);
        this.updateBookingsList = this.updateBookingsList.bind(this);
        this.deleteBooking = this.deleteBooking.bind(this);
        this.handleDateFilter = this.handleDateFilter.bind(this);
    }

    componentDidMount() {
        const url_bookings = "http://localhost:8080/bookings";
        fetch(url_bookings)
            .then(res => res.json())
            .then(data => this.setState({bookings: data._embedded.bookings}))
            .catch(err => console.error(err))


        const url_tables = "http://localhost:8080/diningTables";
        fetch(url_tables)
            .then(res => res.json())
            .then(data => this.setState({tables: data._embedded.diningTables}))
            .catch(err => console.error(err))

    }

    onEdit(){
        this.setState({editable: true})
        console.log(this.state.editable)
    }

    deleteBooking(id) {
        const url = "http://localhost:8080/bookings/" + id
        fetch(url, {
            method: 'DELETE',
        })
            .then(this.updateBookingsList(id))
            .then(this.setState({ state: this.state }))
            .catch(err => console.error(err))
    }

    updateBookingsList(id) {
        const bookingList = this.state.bookings;
        if (this.state.isFiltered){
          this.handleDateFilter(this.state.dateString)
        }
        let index = null;
        console.log(bookingList)
        for (let i=0; i<bookingList.length; i++) {
            let booking = bookingList[i];
            if (booking.id === id){
                index = i;
            }
        }

        bookingList.splice(index, 1);
        this.setState({bookings: bookingList})
    }


    handleDateFilter(dateString){
      console.log("Page Cont: " + dateString)

      const url_filtered = "http://localhost:8080/bookings/" + dateString + "/date";
      console.log(url_filtered);
      fetch(url_filtered)
        .then(res => res.json())
        .then(data => this.setState({filteredBookings: data, isFiltered: true}))
        .catch(err => console.error(err))
    }

    render(){
        return (
            <div className="page-container">
              <BookingTableForm/>
              <TableBox tables = {this.state.tables}/>
                <BookingBox
                bookings = {this.state.bookings}
                filteredBookings = {this.state.filteredBookings}
                isFiltered = {this.state.isFiltered}
                edit = {this.onEdit}
                delete = {this.deleteBooking}
                handleDateFilter = {this.handleDateFilter}/>
            </div>
        )
    }
}


export default PageContainer;
