/**
 * 说明：本js内所有方法均为本人原创或官网方法的二次封装
 */

import chinanVariable from '../../common/chinanVariable.js';

/**
 * 对比两个时间先后，'>'表示d1比d2早
 * ...compareDate('...', '...')
 *
 * @param {String} d1 第一个时间内
 * @param {String} d2 第二个时间
 */
function compareDate(d1, d2) {
	return ((new Date(d1)) > (new Date(d2)))
}

/**
 * 获取当前
 * 格式必须符合：年yyyy，月MM，日dd，时HH，分mm，秒ss， 否则将无法获取对应的时间
 * 参数为''或null或'null'或undefined或'undefined'时默认返回格式：yyyy-MM-dd HH:mm:ss
 * ...formatNowTime('yyyy-MM-dd HH:mm:ss')
 * 
 * @param {String} format 自定义格式，为''或null或'null'或undefined或'undefined'时默认返回：yyyy-MM-dd HH:mm:ss
 */
function formatNowTime(format) {
	// 获取当前时间
	const time = new Date();

	if (format === '' || format === null || format === 'null' || format === undefined || format === 'undefined') {
		return addZero(time.getFullYear()) +
			'-' + addZero(time.getMonth() + 1) +
			'-' + addZero(time.getDate()) +
			' ' + addZero(time.getHours()) +
			':' + addZero(time.getMinutes()) +
			':' + addZero(time.getSeconds())
	}

	// 取字符y、M、d、H、m、s出现的最后一次下标
	const last_y = format.lastIndexOf('y');
	const last_M = format.lastIndexOf('M');
	const last_d = format.lastIndexOf('d');
	const last_H = format.lastIndexOf('H');
	const last_m = format.lastIndexOf('m');
	const last_s = format.lastIndexOf('s');

	return (format.substring(last_y - 3, last_y + 1) === 'yyyy' ?
			addZero(time.getFullYear()) : '') +
		(format.substring(last_M - 1, last_M + 1) === 'MM' ?
			(format.substring(last_M - 2, last_M - 1) + addZero(time.getMonth() + 1)) :
			'') +
		(format.substring(last_d - 1, last_d + 1) === 'dd' ?
			(format.substring(last_d - 2, last_d - 1) + addZero(time.getDate())) :
			'') +
		(format.substring(last_H - 1, last_H + 1) === 'HH' ?
			(format.substring(last_H - 2, last_H - 1) + addZero(time.getHours())) :
			'') +
		(format.substring(last_m - 1, last_m + 1) === 'mm' ?
			(format.substring(last_m - 2, last_m - 1) + addZero(time.getMinutes())) :
			'') +
		(format.substring(last_s - 1, last_s + 1) === 'ss' ?
			(format.substring(last_s - 2, last_s - 1) + addZero(time.getSeconds())) :
			'')
}

/**
 * 对象小于10则加前缀0
 * addZero('...')
 * 
 * @param {String} obj
 */
function addZero(obj) {
	return obj < 10 ? ('0' + obj) : obj;
}

/**
 * 替换指定位置的字符串并返回替换后的结果
 * ...replacepos('...', 0, 1, '...')
 * 
 * @param {String} text 需要操作的字符串
 * @param {Integer} start 需要替换的字符串的起始位置
 * @param {Integer} stop 需要替换的字符串的结束位置
 * @param {String} replacetext 替换的字符串
 */
function replacepos(text, start, stop, replacetext) {
	let mystr = text.substring(0, start) + replacetext + text.substring(stop + 1);
	return mystr;
}

/**
 * 根据比较的时间和当前时间进行对比，返回不同的结果
 * <=1分钟返回time+'秒前'，<=1小时返回time+'分钟前'，<=24小时返回time+'小时前'，<7天返回time+'天前'，>=7天返回原日期
 * ...completeTime('...')
 * 
 * @param {String 需要处理的时间} time 需要处理的时间
 */
function completeTime(time) {
	const diff = new Date() - new Date(time);
	return (diff / 1000 < 60) ? Math.floor(diff / 1000) + '秒前' :
		(diff / 1000 / 60 < 60) ? Math.floor(diff / 1000 / 60) + '分钟前' :
		(diff / 1000 / 60 / 60 < 24) ? Math.floor(diff / 1000 / 60 / 60) + '小时前' :
		Math.floor(diff / 1000 / 60 / 60 / 24) + '天前';
}

/**
 * 实现简单的图文排版
 * ...illustrate('...')
 * 
 * @param {String} content 需要进行图文排版的文本
 */
function illustrate(content) {
	// 初始取值
	let con = content;
	// 用于记录每一次获取打'$'的下标
	let index = 0;
	// 先定义空数组结束后再赋值
	let list = [];
	while (con.indexOf('$') != -1) {
		// 记录循环内第一次查找到'$'的下标
		index = con.indexOf('$');
		// 第一次往列表存，内容是文字，type: 'text'作为标识
		list.push({
			type: 'text',
			content: con.substring(0, index)
		})
		// 文字取完后把第一个'$'前包括''的全截掉
		con = con.substring(index + 1, con.length);
		// 再获取一次'$'的位置，此时还是第一个'$'
		index = con.indexOf('$');
		// 第二次往列表存，内容是图片，type: 'image'作为标识
		list.push({
			type: 'image',
			content: con.substring(0, con.indexOf('$'))
		})
		// 图片取完后把第二个(上一次截取前，没有上一次截取这个就是第二个)'$'前包括'$'的全截掉，
		con = con.substring(con.indexOf('$') + 1, con.length);
		// 循环结束，此时需要继续截取的字符串的结构还是：...+文字+$+图片地址+$+...
	}
	// 补尾巴，循环结束后肯定没有图片了
	list.push({
		type: 'text',
		content: con
	})
	return list;
}

/**
 * 拉起qq
 * ...telme('...')
 * 
 * @param {qq 需要登录的qq账号} qq 需要登录的qq账号
 */
function telme(qq) {
	plus.runtime.openURL('mqq://im/chat?chat_type=wpa&uin=' + qq + '&version=1&src_type=web ');
}

/**
 * 调用uni.showToast方法
 * ...uniToast('...', 'success', 'center', 1000)
 * 
 * @param {String} title 显示的标题
 * @param {String} type 显示的类型需加''，限制为'none','success','error'，默认'none'
 * @param {String} position 显示的位置 需加''，限制为'center','bottom','top'，默认为'center'
 * @param {Integer} duration 显示的时间，单位毫秒
 */
function uniToast(title, type, position, duration) {
	if (type != 'none' && type != 'success' && type != 'error') {
		type = 'none';
	}
	if (position != 'center' && position != 'bottom' && position != 'top') {
		position = 'center'
	}
	uni.showToast({
		title: title,
		icon: type,
		position: position,
		duration: duration
	})
}

/**
 * 调用uni.showToast方法，自定义图片
 * ...uniToastByImage('...', '...', 1000)
 * 
 * @param {String} title 显示的标题
 * @param {String} imgUrl 自定义图片路径，直接填写图片名称和后缀，前面的路径不需要
 * @param {Integer} duration 显示的时间
 */
function uniToastByImage(title, imgUrl, duration) {
	uni.showToast({
		title: title,
		position: 'center',
		image: '/static/images/' + imgUrl,
		duration: duration
	})
}

/**
 * 调用uni.request方法
 * ...uniRequest('...', {
	 ...
 }, function(res) {
	 ...
 })
 * 
 * @param {String} url 请求地址
 * @param {Object} data 请求数据，要求Object类型
 * @param {function} success 成功回调
 */
function uniRequest(url, data, success) {
	uni.request({
		url: chinanVariable.baseUrl + url,
		data: data,
		method: 'GET',
		success: (res) => {
			success(res);
		},
		fail: (res) => {
			uniToast(url + ' => fail!', '', '', 1000);
		},
	})
}

/**
 * 调用uni.navigateTo方法
 * 有跳转动画
 * ...uniNavigateToByAnim('...', 1, 500)
 * 
 * @param {url} url 跳转的地址
 * @param {Integer} 页面切换动画，支持0-8，8为无动画
 * @param {Integer} animationDuration 动画时间
 */
function uniNavigateToByAnim(url, animationType, animationDuration) {
	const animList = [
		'slide-in-right', 'slide-in-left', 'slide-in-top',
		'slide-in-bottom', 'pop-in', 'fade-in',
		'zoom-out', 'zoom-fade-out', 'none'
	];
	uni.navigateTo({
		url: url,
		animationType: animList[animationType],
		animationDuration: animationDuration
	})
}

/**
 * 调用uni.navigateTo方法
 * ...uniNavigateTo('...')
 * 
 * @param {url 跳转的地址} url 跳转的地址
 */
function uniNavigateTo(url) {
	uni.navigateTo({
		url: url
	})
}

/**
 * 调用uni.setStorage方法
 * ...uniSetStorages({
	 key: 'key1',
	 data: 'data1'
 }, {
	 key: 'key2',
	 data: 'data2'
 }, ...)
 * 
 * @param {value 所有需要设置缓存的数据列表，结构：[{key: '', data: ''},...] value 数据列表
 */
function uniSetStorages(value) {
	value.forEach(function(e) {
		uni.setStorage({
			key: e.key,
			data: e.data
		});
	})
}

/**
 * 调用uni.setStorage方法
 * ...uniSetStorage('key', 'data')
 * 
 * @param {key 键} key 键
 * @param {data 值} data 值
 */
function uniSetStorage(key, data) {
	uni.setStorage({
		key: key,
		data: data
	});
}

/**
 * 调用uni.pageScrollTo方法
 * ...uniPageScrollTo(0, 1000)
 * 
 * @param {Integer} scrollTop 滚动条需要滚动到的位置
 * @param {Integer} duration 滚动的持续时间
 */
function uniPageScrollTo(scrollTop, duration) {
	uni.pageScrollTo({
		scrollTop: scrollTop,
		duration: duration
	})
}

/**
 * 调用uni.shareWithSystem方法
 * ...uniShareWithSystem('...', '...', function(res) {
	 ...
 }, function(res) {
	 ...
 })
 * 
 * @param {String} summary 分享的文字内容
 * @param {String} href 分享的地址
 * @param {function} success 成功回调
 * @param {function} fail 失败回调
 */
function uniShareWithSystem(summary, href, success, fail) {
	// 能分享，但只能确保拉起分享界面并跳转分享，不能确保分享成功
	uni.shareWithSystem({
		summary: summary,
		href: href,
		success(res) {
			success(res);
		},
		fail(res) {
			fail(res);
		}
	})
}

/**
 * 调用uni.login方法
 * ...uniLogin('...', function(res) {
	 ...
 }, function(res) {
	 ...
 })
 * @param {String} provider 登录供应商
 * @param {function} success 成功回调
 * @param {function} fail 失败回调
 */
function uniLogin(provider, success, fail) {
	uni.login({
		provider: provider,
		successn(loginRes) {
			success(loginRes);
		},
		fail(loginRes) {
			fail(loginRes);
		}
	});
}

/**
 * 调用uni.getUserInfo方法
 * ...uniGetUserInfo('...', function(res) {
	 ...
 }, function(res) {
	 ...
 })
 * 
 * @param {String} provider 登录供应商
 * @param {function} success 成功回调
 * @param {function} fail 失败回调
 */
function uniGetUserInfo(provider, success, fail) {
	uni.getUserInfo({
		provider: provider,
		success(infoRes) {
			success(infoRes);
		},
		fail(infoRes) {
			fail(infoRes);
		}
	})
}

/**
 * 调用uni.showLoading方法
 * ...uniShowLoading('...')
 * 
 * @param {String} title 显示的文本内容
 */
function uniShowLoading(title) {
	uni.showLoading({
		title: title
	})
}

/**
 * 调用uni.downloadFile和uni.saveImageToPhotosAlbum方法保存网络图片至本地相册
 * ...uniDownLoadImg('...')
 * 
 * @param {String} url 图片文件地址
 */
function uniDownLoadImg(url) {
	uni.downloadFile({
		url: url,
		success: (res) => {
			if (res.statusCode === 200) {
				uni.saveImageToPhotosAlbum({
					filePath: res.tempFilePath,
					success: function() {
						uniToast('保存成功!', 'success', '', 2000);
					},
					fail: function() {
						uniToast('保存失败!', 'error', '', 2000);
					}
				});
			} else {
				uniToast('uni.downloadFile: res.statusCode => ' + res.statusCode + '!', 'none', '', 2000);
			}
		}
	})
}

/**
 * 调用uni.saveImageToPhotosAlbum方法保存缓存图片至本地相册
 * ...uniSaveImageToPhotosAlbum('...')
 * 
 * @param {String} url 图片文件地址
 */
function uniSaveImageToPhotosAlbum(url) {
	let flag = false;
	uni.showLoading({
		title: '图片保存中...'
	})
	uni.saveImageToPhotosAlbum({
		filePath: url,
		success: function() {
			uniToast('保存成功!', 'success', '', 2000);
		},
		fail: function() {
			uniToast('保存失败!', 'error', '', 2000);
		},
		complete() {
			flag = true;
		}
	});
	let interval = setInterval(() => {
		if (flag) {
			uni.hideLoading();
			clearInterval(interval);
		}
	})
}

/**
 * 调用uni.downloadFile和uni.previewImage方法实现点击图片放大预览，长按可选择保存图片
 * ...uniPreviewImage('...')
 * 
 * @param {String} url 图片文件地址
 */
function uniPreviewImage(url) {
	let flag = false;
	uni.showLoading({
		title: '预览加载中...'
	})
	uni.downloadFile({
		url: url,
		success: (res) => {
			if (res.statusCode === 200) {
				uni.previewImage({
					urls: [res.tempFilePath],
					longPressActions: {
						itemList: ['保存图片'],
						success: function(data) {
							if (data.tapIndex === 0) {
								uniSaveImageToPhotosAlbum(res.tempFilePath);
							}
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			} else {
				uniToast('uni.downloadFile: res.statusCode => ' + res.statusCode + '!', 'none', '', 2000);
			}
		},
		fail: () => {
			uniToast('uni.downloadFile => fail!', 'none', '', 2000);
		}
	})
	let interval = setInterval(() => {
		if (flag) {
			uni.hideLoading();
			clearInterval(interval);
		}
	})
}

/**
 * 调用uni.chooseImage方法选择图片
 * ...uniChooseImage(9, function(res) {
	 ...
 })
 * 
 * @param {Integer} count 图片最大选择数，最大为9
 * @param {function} success 成功回调
 */
function uniChooseImage(count, success) {
	uni.chooseImage({
		count: count,
		sizeType: 'compressed',
		success: (res) => {
			success(res);
			res.tempFilePaths.forEach(function(item) {
				uni.downloadFile({
					url: item
				})
			})
		},
		fail: () => {
			uniToast('uni.chooseImage => fail!', 'error', '', 2000);
		}
	})
}

/**
 * 调用uni.getLocation方法获取当前位置
 * ...uniGetLocationAddress(function(address) {
	 ...
 })
 * 
 * @param {function} success成功回调
 * @return {String} country:国家，province:省份，city:城市，district:区（县），street:街道，streetNum:门牌号信息，poiName:POI信息，postalCode:邮政编码，cityCode:城市代码
 */
function uniGetLocationAddress(success) {
	uni.getLocation({
		type: 'wgs84',
		geocode: true,
		success: function(res) {
			success(res.address);
		},
		fail: function(res) {
			console.log(res);
		}
	})
}

/**
 * 查看文章详情页
 * ...articleCheckDetail('...', 1)
 * 
 * @param {String} ArticleId 文章id
 * @param {Number} type 详情页类型
 */
function articleCheckDetail(ArticleId, type) {
	uni.showLoading({
		title: '页面加载中...'
	})
	uniRequest('/article/getByArticleId', {
		ArticleId: ArticleId
	}, function(res) {
		if (res.data.code === '0') {
			if (type === 1) {
				uniSetStorages([{
					key: 'detail',
					data: res.data.data
				}, {
					key: 'detailType',
					data: 'article'
				}]);
			} else if (type === 2) {
				uniSetStorages([{
					key: 'detail',
					data: res.data.data
				}, {
					key: 'detailType',
					data: 'article2'
				}]);
			}
			setTimeout(() => {
				uni.hideLoading();
				uniNavigateTo('../detail/detail');
			}, 500);
		} else {
			uni.hideLoading();
			uniToast('getByArticleId: code => ' + res.data.code + '!', '', 2000);
		}
	}, function(res) {
		uni.hideLoading();
		uniToast('getByArticleId => fail!', '', 2000);
	});
}

/**
 * 查看动态详情
 * ...dynamicCheckDetail('...')
 * 
 * @param {String} DynamicId 动态id
 */
function dynamicCheckDetail(DynamicId) {
	let flag = false;
	uni.showLoading({
		title: '页面加载中...'
	})
	uniRequest('/dynamic/getByDynamicId', {
		DynamicId: DynamicId
	}, function(res) {
		if (res.data.code === '0') {
			let list = res.data.data.DynamicImg.split('!');
			let imagesContent = [];
			list.forEach(function(item) {
				if (item != '') {
					imagesContent.push(item);
				}
			})
			uniSetStorages([{
				key: 'detail',
				data: {
					userHeadImg: res.data.data.HeadPortrait,
					nickname: res.data.data.UName,
					time: res.data.data.ReleaseTime,
					content: {
						textContent: res.data.data.DynamicContent,
						imagesContent: imagesContent
					},
					likeNumber: res.data.data.DynamicLike,
					transmitNumber: res.data.data.LookNumber,
					pageView: res.data.data.LookNumber,
					DynamicId: res.data.data.DynamicId,
					UId: res.data.data.UId
				}
			}, {
				key: 'detailType',
				data: 'dynamic'
			}]);
			setTimeout(() => {
				uniNavigateTo('../detail/detail');
			}, 200);
		} else {
			uniToast('getByDynamicId: code = ' + res.data.code + "!", '', '', 2000);
		}
	});
	let interval = setInterval(() => {
		if (flag) {
			uni.hideLoading();
			clearInterval(interval);
		}
	})
}

/**
 * 调用uni.showModal方法
 * ...uniShowModal('...', '...', true, function(confirm) {
	 if (confirm) {
		 ...
	 }
 })
 * @param {String} title 弹窗标题
 * @param {String} content 弹窗内容
 * @param {Boolean} showCancel 是否显示取消按钮
 * @param {function} success 成功回调
 */
function uniShowModal(title, content, showCancel, success) {
	uni.showModal({
		title: title,
		content: content,
		showCancel: showCancel,
		success(res) {
			success(res.confirm);
		}
	})
}

/**
 * 将文本添加到剪切板
 * ...setClipboardText('...')
 * 
 * @param {String} text
 */
function setClipboardText(text) {
	uni.setClipboardData({
		data: text,
		success() {
			uniToast('复制成功!', '', '', 2000);
		},
		fail() {
			uniToast('复制失败!', '', '', 2000);
		}
	})
}

/**
 * 调用uni.uploadFile方法上传图片
 * ...uniUploadFile('...', '...', [], {}, function(res) {
	 ...
 })
 * @param {String} loadingTitle 加载动画标题
 * @param {String} url 接口地址
 * @param {ArrayList} files 上传的图片数组
 * @param {Object} formData 其他参数
 * @param {function} success 成功回调
 */
function uniUploadFile(loadingTitle, url, files, formData, success) {
	uni.showLoading({
		title: loadingTitle
	})
	uni.uploadFile({
		url: url,
		files: files,
		name: 'file',
		formData: formData,
		success: (uploadFileRes) => {
			uni.hideLoading();
			success(uploadFileRes);
		},
		fail: (uploadFileRes) => {
			uni.hideLoading();
			console.log(uploadFileRes);
		}
	});
}

/**
 * 排序
 * ...sort([], true, function(list) {
	 ...
 })
 * 
 * @param {ArrayList} list 需要排序的列表
 * @param {Boolean} order 排序顺序，true为正序，false为倒序
 * @param {function} answer 排完序后的结果
 */
function sort(list, order, answer) {
	if (order) {
		list.sort(function(a, b) {
			return a.CommentsTime < b.CommentsTime ? -1 : 1
		});
	} else {
		list.sort(function(a, b) {
			return a.CommentsTime < b.CommentsTime ? 1 : -1
		});
	}
	answer(list);
}

/**
 * 调用uni.removeStorage方法移除多个缓存数据
 * ...uniRemoveStorages(['key1', 'key2', ...])
 * 
 * @param {ArrayList} keys 多个缓存数据数据的key数组
 */
function uniRemoveStorages(keys) {
	keys.forEach((key) => {
		uni.removeStorage({
			key: key
		})
	})
}

export default {
	compareDate,
	formatNowTime,
	replacepos,
	completeTime,
	illustrate,
	telme,
	articleCheckDetail,
	dynamicCheckDetail,
	sort,
	uniRemoveStorages,
	uniRequest,
	uniNavigateToByAnim,
	uniNavigateTo,
	uniSetStorages,
	uniSetStorage,
	uniPageScrollTo,
	uniShareWithSystem,
	uniLogin,
	uniGetUserInfo,
	uniDownLoadImg,
	uniPreviewImage,
	uniShowLoading,
	uniChooseImage,
	uniGetLocationAddress,
	uniToast,
	uniToastByImage,
	uniShowModal,
	setClipboardText,
	uniUploadFile
}
