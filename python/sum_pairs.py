def sum_pairs(num_list, num):
    answer =[]
    for i in range(len(num_list)):
        for j in range(i + 1, len(num_list)): # do i + 1 so lists won't repeat in answer
            if num_list[i] + num_list[j] == num:
                answer.append([num_list[i], num_list[j]])

    if len(num_list) == 0:
        return 'unable to find pairs'
    else:
        return answer

