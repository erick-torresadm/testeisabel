import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

let supabase: SupabaseClient | null = null

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey)
}

export interface Post {
  id: string
  titulo: string
  slug: string
  conteudo: string
  resumo: string
  categoria: string
  imagem_capa: string
  data_publicacao: string
  autor: string
  tags: string[]
}

export async function getPosts(limit = 10): Promise<Post[]> {
  if (!supabase) {
    console.warn('Supabase não configurado')
    return []
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('data_publicacao', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Erro ao buscar posts:', error)
    return []
  }

  return data || []
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!supabase) {
    console.warn('Supabase não configurado')
    return null
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Erro ao buscar post:', error)
    return null
  }

  return data
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  if (!supabase) {
    console.warn('Supabase não configurado')
    return []
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('categoria', category)
    .order('data_publicacao', { ascending: false })

  if (error) {
    console.error('Erro ao buscar posts por categoria:', error)
    return []
  }

  return data || []
}
