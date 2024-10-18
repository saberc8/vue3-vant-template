import request from '@/utils/request'

export const getSysRandomImage = (key) => request.get('/sys/randomImage/' + key)
