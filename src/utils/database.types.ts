export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      clubs: {
        Row: {
          competition_id: number | null
          full_name: string | null
          id: number
          name: string
          picture_url: string | null
          primary_color: string | null
          secondary_color: string | null
          short_name: string | null
          slug: string | null
        }
        Insert: {
          competition_id?: number | null
          full_name?: string | null
          id?: number
          name: string
          picture_url?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          short_name?: string | null
          slug?: string | null
        }
        Update: {
          competition_id?: number | null
          full_name?: string | null
          id?: number
          name?: string
          picture_url?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          short_name?: string | null
          slug?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clubs_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competitions"
            referencedColumns: ["id"]
          },
        ]
      }
      competitions: {
        Row: {
          country: string | null
          id: number
          name: string
        }
        Insert: {
          country?: string | null
          id?: number
          name: string
        }
        Update: {
          country?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      games: {
        Row: {
          created_at: string
          created_by: string
          gamedata: Json
          hidden_data: Json | null
          id: number
          type: Database["public"]["Enums"]["game_type"]
        }
        Insert: {
          created_at?: string
          created_by: string
          gamedata?: Json
          hidden_data?: Json | null
          id?: number
          type: Database["public"]["Enums"]["game_type"]
        }
        Update: {
          created_at?: string
          created_by?: string
          gamedata?: Json
          hidden_data?: Json | null
          id?: number
          type?: Database["public"]["Enums"]["game_type"]
        }
        Relationships: [
          {
            foreignKeyName: "games_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      players: {
        Row: {
          birthdate: string | null
          caps: number | null
          citizenship: string[] | null
          detailedposition: string | null
          difficulty: Database["public"]["Enums"]["difficulty"] | null
          firstname: string | null
          foot: string | null
          fullname: string | null
          height: number | null
          id: number
          lastname: string | null
          marketvalue: number | null
          position: string | null
          shirtnumber: number | null
        }
        Insert: {
          birthdate?: string | null
          caps?: number | null
          citizenship?: string[] | null
          detailedposition?: string | null
          difficulty?: Database["public"]["Enums"]["difficulty"] | null
          firstname?: string | null
          foot?: string | null
          fullname?: string | null
          height?: number | null
          id?: number
          lastname?: string | null
          marketvalue?: number | null
          position?: string | null
          shirtnumber?: number | null
        }
        Update: {
          birthdate?: string | null
          caps?: number | null
          citizenship?: string[] | null
          detailedposition?: string | null
          difficulty?: Database["public"]["Enums"]["difficulty"] | null
          firstname?: string | null
          foot?: string | null
          fullname?: string | null
          height?: number | null
          id?: number
          lastname?: string | null
          marketvalue?: number | null
          position?: string | null
          shirtnumber?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          full_name: string | null
          id: string
          updated_at: string | null
          username: string
        }
        Insert: {
          full_name?: string | null
          id: string
          updated_at?: string | null
          username: string
        }
        Update: {
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tictactoe_games: {
        Row: {
          answer_tiles: Json
          competition_id: number
          created_at: string
          id: number
          next_move_before: number
          player_1: string
          player_2: string | null
          quiz_tiles: Json
          status: Database["public"]["Enums"]["status"]
          timelimit: number
          turn_of_user: string
        }
        Insert: {
          answer_tiles: Json
          competition_id: number
          created_at?: string
          id?: number
          next_move_before: number
          player_1: string
          player_2?: string | null
          quiz_tiles: Json
          status: Database["public"]["Enums"]["status"]
          timelimit: number
          turn_of_user: string
        }
        Update: {
          answer_tiles?: Json
          competition_id?: number
          created_at?: string
          id?: number
          next_move_before?: number
          player_1?: string
          player_2?: string | null
          quiz_tiles?: Json
          status?: Database["public"]["Enums"]["status"]
          timelimit?: number
          turn_of_user?: string
        }
        Relationships: [
          {
            foreignKeyName: "tictactoe_games_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tictactoe_games_player_1_fkey"
            columns: ["player_1"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tictactoe_games_player_2_fkey"
            columns: ["player_2"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tictactoe_games_turn_of_user_fkey"
            columns: ["turn_of_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      transfer_history_games: {
        Row: {
          competition_id: number
          created_at: string
          created_by: string
          difficulty: Database["public"]["Enums"]["difficulty"]
          id: number
          lives: number
          next_move_before: number | null
          questions: Json
          timelimit: number | null
        }
        Insert: {
          competition_id: number
          created_at?: string
          created_by: string
          difficulty: Database["public"]["Enums"]["difficulty"]
          id?: number
          lives: number
          next_move_before?: number | null
          questions: Json
          timelimit?: number | null
        }
        Update: {
          competition_id?: number
          created_at?: string
          created_by?: string
          difficulty?: Database["public"]["Enums"]["difficulty"]
          id?: number
          lives?: number
          next_move_before?: number | null
          questions?: Json
          timelimit?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "transfer_history_games_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transfer_history_games_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      transfers: {
        Row: {
          enddate: string | null
          fee: string | null
          fromteam: number
          period: unknown | null
          playerid: number
          startdate: string
          toteam: number
        }
        Insert: {
          enddate?: string | null
          fee?: string | null
          fromteam: number
          period?: unknown | null
          playerid?: number
          startdate: string
          toteam: number
        }
        Update: {
          enddate?: string | null
          fee?: string | null
          fromteam?: number
          period?: unknown | null
          playerid?: number
          startdate?: string
          toteam?: number
        }
        Relationships: [
          {
            foreignKeyName: "transfers_fromteam_fkey"
            columns: ["fromteam"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transfers_playerid_fkey"
            columns: ["playerid"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transfers_toteam_fkey"
            columns: ["toteam"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
        ]
      }
      user_games: {
        Row: {
          correct_answers: number
          created_at: string
          game_id: number
          game_type: Database["public"]["Enums"]["game_type"]
          incorrect_answers: number
          user_id: string
          xp: number
        }
        Insert: {
          correct_answers?: number
          created_at?: string
          game_id: number
          game_type: Database["public"]["Enums"]["game_type"]
          incorrect_answers?: number
          user_id: string
          xp?: number
        }
        Update: {
          correct_answers?: number
          created_at?: string
          game_id?: number
          game_type?: Database["public"]["Enums"]["game_type"]
          incorrect_answers?: number
          user_id?: string
          xp?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_games_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      usergames: {
        Row: {
          game_id: number
          user_id: string
          usergamedata: Json
          xp: number
        }
        Insert: {
          game_id: number
          user_id: string
          usergamedata?: Json
          xp?: number
        }
        Update: {
          game_id?: number
          user_id?: string
          usergamedata?: Json
          xp?: number
        }
        Relationships: [
          {
            foreignKeyName: "usergames_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "usergames_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games_restricted"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "usergames_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      games_restricted: {
        Row: {
          created_at: string | null
          created_by: string | null
          game_id: number | null
          gamedata: Json | null
          id: number | null
          user_id: string | null
          usergamedata: Json | null
          xp: number | null
        }
        Relationships: [
          {
            foreignKeyName: "games_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "usergames_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "usergames_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games_restricted"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "usergames_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      transfer_history_games_view: {
        Row: {
          competition_id: number | null
          created_by: string | null
          difficulty: Database["public"]["Enums"]["difficulty"] | null
          enddate: string | null
          fromteam: string | null
          game_id: number | null
          lives: number | null
          next_move_before: number | null
          period: unknown | null
          startdate: string | null
          timelimit: number | null
          toteam: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transfer_history_games_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transfer_history_games_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      generate_username: {
        Args: {
          full_name: string
          email: string
        }
        Returns: string
      }
      get_common_teammates: {
        Args: {
          player1_id: number
          player2_id: number
        }
        Returns: {
          birthdate: string | null
          caps: number | null
          citizenship: string[] | null
          detailedposition: string | null
          difficulty: Database["public"]["Enums"]["difficulty"] | null
          firstname: string | null
          foot: string | null
          fullname: string | null
          height: number | null
          id: number
          lastname: string | null
          marketvalue: number | null
          position: string | null
          shirtnumber: number | null
        }[]
      }
      get_current_players_order_by_marketvalue_from_competition: {
        Args: {
          fromcompetition_id: number
        }
        Returns: {
          birthdate: string | null
          caps: number | null
          citizenship: string[] | null
          detailedposition: string | null
          difficulty: Database["public"]["Enums"]["difficulty"] | null
          firstname: string | null
          foot: string | null
          fullname: string | null
          height: number | null
          id: number
          lastname: string | null
          marketvalue: number | null
          position: string | null
          shirtnumber: number | null
        }[]
      }
      update_difficulty_players_from_competition: {
        Args: {
          competition_id: number
          difficulty: Database["public"]["Enums"]["difficulty"]
        }
        Returns: undefined
      }
    }
    Enums: {
      difficulty: "EASY" | "MEDIUM" | "HARD"
      game_type:
        | "TICTACTOE"
        | "THE_LINK"
        | "TRANSFER_HISTORY"
        | "SQUAD_BUILDING_CHALLENGE"
      status: "JOINABLE_PUBLIC" | "JOINABLE_PRIVATE" | "PLAYING" | "ENDED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never