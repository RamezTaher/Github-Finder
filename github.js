class Github {
  constructor() {
    this.client_id = "3af1ecfae4d4901aca4b"
    this.client_secret = "b5ac346ba01b0170bb56373b5b0efce1aaede4c3"
    this.repos_count = 5
    this.repos_sort = "created:asc"
  }

  async getUser(user) {
    const profileRes = await fetch(
      ` https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )

    const repoRes = await fetch(
      ` https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    )
    const profile = await profileRes.json()
    const repos = await repoRes.json()

    return {
      profile,
      repos,
    }
  }
}
