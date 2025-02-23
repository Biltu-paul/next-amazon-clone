import mongoose from 'mongoose'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null }

export const connectToDatabase = async (
    MONGODB_URI = 'mongodb+srv://next-amazon:nu.uitNm39LiMR4@cluster0.ehxcz.mongodb.net/nextjs-amazon?retryWrites=true&w=majority&appName=Cluster0'
  ) => {
    console.log("Database URL:", process.env.MONGODB_URI);
    if (cached.conn) return cached.conn
  
    if (!MONGODB_URI) throw new Error('MONGODB_URI is missing')
  
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI)
  
    cached.conn = await cached.promise
  
    return cached.conn
  }