class UI {
  constructor() {
    this.profile = document.getElementById("profile")
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile </a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
          <span class="badge badge-success">Followers:${user.followers}</span>
          <span class="badge badge-info">Following:${user.following}</span>
          <br/>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div> 
    </div>
    <h3 class="page-heading mb-3">Lastest Repos</h3>
    <div id="repos"></div>
    `
  }

  clearProfile() {
    this.profile.innerHTML = ""
  }

  // Show alert pop up
  showAlert(msg, className) {
    // Clear any remain alerts
    this.clearAlert()
    // Create div
    const div = document.createElement("div")
    // Add classes
    div.className = className
    // Add text
    div.appendChild(document.createTextNode(msg))
    // Get Parent
    const container = document.querySelector(".searchContainer")
    // Get Search box
    const search = document.querySelector(".search")
    // Insert alert
    container.insertBefore(div, search)

    // Remove alert after 2 sec
    setTimeout(() => {
      this.clearAlert()
    }, 2000)
  }

  // Clear Alert pop up
  clearAlert() {
    const currentAlert = document.querySelector(".alert")
    if (currentAlert) {
      currentAlert.remove()
    }
  }

  // Show user repos
  showRepos(repos) {
    let output = ""
    repos.forEach((repo) => {
      output += `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <a href="${repo.html_url}" target="_blank" >${repo.name}</a>
        </div>
        <div class="col-md-6">
          <span class="badge badge-primary">Starts: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary">Watchers:${repo.watchers_count}</span>
          <span class="badge badge-success">Forks:${repo.forks_count}</span>
          
        </div>
      </div> 
    </div>
      `
    })
    // Output repos
    document.getElementById("repos").innerHTML = output
  }
}
