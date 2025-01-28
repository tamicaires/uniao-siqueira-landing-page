interface Post {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
}

class InMemoryStorage {
  private posts: Post[] = []

  async getAllPosts(): Promise<Post[]> {
    return this.posts
  }

  async addPost(post: Omit<Post, "id" | "createdAt">): Promise<Post> {
    const newPost: Post = {
      ...post,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    }
    this.posts.unshift(newPost)
    return newPost
  }

  async getPost(id: string): Promise<Post | undefined> {
    return this.posts.find((post) => post.id === id)
  }
}

export const storage = new InMemoryStorage()

