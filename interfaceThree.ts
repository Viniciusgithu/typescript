
interface GithubUserResponse {
  id: number
  login: string
  name: string
  bio: string
  public_repos: number
  repos_url: string
  message?: "Not Found"
}

interface GithubResponse {
  name: string
  description: string
  fork: boolean
  stargazers_count: number
}

const users: GithubUserResponse[] = []

async function fetchUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const user: GithubUserResponse = await response.json()

  if (user.message) {
    console.log(`${username} não encontrado`)
  } else {
    users.push(user)

    console.log(
      `O usuário ${user.login} foi encontrado:\n` +
      `\nSeu id: ${user.id}` +
      `\nLogin: ${user.login}` +
      `\nNome: ${user.name} ` +
      `\nBio: ${user.bio} ` +
      `\nRepositórios públicos: ${user.public_repos}`
    )
  }

}