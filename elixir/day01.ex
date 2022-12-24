defmodule Aoc2022.Day01 do
  def most_calories(input) do
    sort_by_calories(input)
    |> hd()
  end
  defp sort_by_calories(input, order \\ :desc) do
    input
    |> String.split("\n\n")
    |> Enum.map(&sum_calories/1)
    |> Enum.sort(order)
  end
  defp sum_calories(input) do
    input
    |> String.split()
    |> Enum.reduce(0, fn calories, acc -> acc + String.to_integer(calories) end)
  end
end
