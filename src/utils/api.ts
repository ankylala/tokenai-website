/**
 * 表单提交API
 * TODO: 替换为实际的后端API地址
 */

export interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  requirement?: string;
}

/**
 * 提交联系表单
 * @param data 表单数据
 * @returns 提交结果
 */
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  const API_ENDPOINT = '/api/contact';
  
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
 
    if (!response.ok) {
      throw new Error('提交失败');
    }
 
    return await response.json();
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: '提交失败，请稍后重试或直接联系我们。',
    };
  }
}

/**
 * 在线客服集成
 * TODO: 集成第三方客服系统（如Intercom、美洽、Zendesk等）
 */
export function initCustomerService() {
  // 示例：集成Intercom
  // window.Intercom('boot', {
  //   app_id: 'your-app-id',
  // });
  
  console.log('Customer service initialized');
}

export function openCustomerService() {
  window.location.href = '/contact#apply';
}
