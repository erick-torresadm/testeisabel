import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, email, telefone, servico, mensagem } = body

    if (!nome || !email || !telefone) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { error } = await supabase.from('contatos').insert([
      {
        nome,
        email,
        telefone,
        servico_interesse: servico,
        mensagem,
        data_contato: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error('Erro ao salvar contato:', error)
      return NextResponse.json(
        { error: 'Erro ao processar sua solicitação' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro na API:', error)
    return NextResponse.json(
      { error: 'Erro interno' },
      { status: 500 }
    )
  }
}
