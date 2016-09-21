'use strict'

$(document).ready(() => {
  $('select').material_select()
  formatDates()
  editUserListener()
  deleteUserListener()
  editPostListener()
  deletePostListener()
})

const id = parseInt(window.location.pathname.split('/')[2])

function formatDates(){
  var dates = $('.date')
  dates.map(date => {
    $('.date').empty()
    $('.date').append(moment(date).format('LL'))
  })
}

function editUserListener(){
  $('#edit-user-btn').click((e) => {
    e.preventDefault()
    const id = $('#id').val().trim()
    const first_name = $('#first_name').val().trim()
    const last_name = $('#last_name').val().trim()
    const avatar = $('#avatar').val().trim()
    const bio = $('#bio').val().trim()
    $.ajax({
      contentType: 'application/json',
      url: `/users/${id}`,
      method: 'PUT',
      dataType: 'json',
      data: JSON.stringify({id, first_name, last_name, avatar, bio}),
    }).done(() => {
      console.log('here')
      window.location = '/users'
    }).fail(err => {
      console.log(err)
    })
  })
}

function deleteUserListener(){
  $('#delete-user-btn').click((e) => {
    e.preventDefault()
    $.ajax({
      contentType: 'application/json',
      url: `/users/${id}`,
      method: 'DELETE',
    }).done(() => {
      console.log('here')
      window.location = '/users'
    }).fail(err => {
      console.log(err)
    })
  })
}

function editPostListener(){
  $('#edit-post-btn').click((e) => {
    e.preventDefault()

    const title = $('#title').val().trim()
    const body = $('#body').val().trim()

    $.ajax({
      contentType: 'application/json',
      url: `/users/${id}`,
      method: 'PUT',
      dataType: 'json',
      data: JSON.stringify({title, body}),
    }).done(() => {
      console.log('here')
      window.location = '/posts'
    }).fail(err => {
      console.log(err)
    })
  })
}

function deletePostListener(){
  $('#delete-post-btn').click((e) => {
    e.preventDefault()
    $.ajax({
      contentType: 'application/json',
      url: `/users/${id}`,
      method: 'DELETE',
    }).done(() => {
      console.log('here')
      window.location = '/posts'
    }).fail(err => {
      console.log(err)
    })
  })
}
